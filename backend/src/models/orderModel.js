import pool from "../config/db.js";

export const fetchAllOrders = async () => {
  const [orders] = await pool.query(
    `SELECT o.id, o.customer_name, o.customer_number, o.address, o.email, o.total_amount, o.status,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'item_id', i.id,
          'name', i.name,
          'price', i.price,
          'quantity', oi.quantity
        )
      ) AS items
     FROM orders o
     JOIN order_items oi ON o.id = oi.order_id
     JOIN items i ON oi.item_id = i.id
     GROUP BY o.id
     ORDER BY o.id DESC`
  );
  return orders;
};

export const updateOrder = async (orderId, status) => {
  const [result] = await pool.query(
    "UPDATE orders SET status = ? WHERE id = ?",
    [status, orderId]
  );
  return result;
};

export const deleteOrderById = async (orderId) => {
  const [result] = await pool.query(
    "DELETE FROM orders WHERE id = ?",
    [orderId]
  );
  return result;
};

export const createOrder = async (orderData, items) => {
  const { customer_name, customer_number, address, email, total_amount, status } = orderData;

  const [result] = await pool.query(
    `INSERT INTO orders 
     (customer_name, customer_number, address, email, total_amount, status, created_at) 
     VALUES (?, ?, ?, ?, ?, ?, NOW())`,
    [customer_name, customer_number, address, email || null, total_amount, status]
  );

  const orderId = result.insertId;
  // insert order items
  for (const item of items) {

    // item_id from items table by name
    const [[dbItem]] = await pool.query(
      "SELECT id, price FROM items WHERE name = ?",
      [item.name]
    );
    if (!dbItem) {
      throw new Error(`Item ${item.name} not found in menu`);
    }


    await pool.query(
      "INSERT INTO order_items (order_id, item_id, quantity, price) VALUES (?, ?, ?, ?)",
      [orderId, dbItem.id, item.quantity, dbItem.price]
    );
  }

  return orderId;
};

