'use server';

import sql from "./db";

// Product Fetch From  DataBase Products_Table //
export const fetchData = async () => {
    const data = await sql`select p_id, p_name, p_price, p_imagepath, p_old_price from products where p_id between ${1} and ${4}`;
    return data;
}

// Product Insert in DataBase Cart_Products_Table by User
export const addProduct = async (email: string, p_id: number, p_qty: number, p_name: string, p_price: number, p_imagepath: string) => {
    // check if product already exists in cart for this user
    const existing = await sql`select sno, p_qty, p_price from cart_products where cust_email=${email} and p_id=${p_id}`;
    if (existing.length > 0) {
        // Product exists -update quantity and price
        const currentQty = existing[0].p_qty;
        const currentPrice = Number(existing[0].p_price);
        const unitPrice = currentPrice / currentQty;
        const newQty = currentQty + p_qty;
        const newPrice = unitPrice * newQty;

        await sql`update cart_products set p_qty=${newQty}, p_price=${newPrice} where sno=${existing[0].sno}`;
        console.log('Product Quantity update in cart');
    } else {
        await sql`insert into cart_products (cust_email, p_id, p_qty, p_name, p_price, p_imagepath) values(${email},${p_id},${p_qty}, ${p_name}, ${p_price} ,${p_imagepath})`;
        console.log('Product has been Add To Cart');
    }
}

// Get Cart Products From DataBase Cart Table
export const getCartProducts = async (email: string) => {
    const res = await sql`select sno, p_id, p_qty, p_name, p_price, p_imagepath from cart_products where cust_email=${email}`;
    return res;
};

// Delete Cart Product From DataBase Cart Table by User
export const DelData = async (sno: number) => {
    await sql`delete from cart_products where sno=${sno}`;
}

// Quantity Update Function
export const UpdateQty = async (sno: number, newQty: number) => {
    await sql`update cart_products set p_qty=${newQty} where sno=${sno}`;
};

// Update price in DB when quantity changes
export const UpdatePrice = async (sno: number, newPrice: number) => {
    await sql`update cart_products set p_price=${newPrice} where sno=${sno}`;
};

// Get total number of cart items for a user
export const getCartCount = async (email: string) => {
    const res = await sql`select count(*) as count from cart_products where cust_email=${email}`;
    return Number(res[0].count);
};