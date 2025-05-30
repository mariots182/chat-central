export interface OrderItem {
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  unit: UnitType;
}

export interface CustomerOrder {
  id: string;
  customerId: string;
  customer_name: string;
  customer_phone: string;
  delivery_address?: string;
  order_delivery_date: string;
  status: OrderStatus;
  total_amount: number;
  payment_method: PaymentMethod;
  order_items: OrderItem[];
  createdAt: string;
}

export interface CustomerAddress {
  street: string;
  number: string;
  colony: string;
  between?: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  observations?: string;
  address_name: string;
  is_default: boolean;
}

export interface Customer {
  customerId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  orders: CustomerOrder[];
}

export type OrderStatus = "pending" | "in_progress" | "delivered" | "cancelled";

export type PaymentMethod = "cash" | "credit_card" | "debit_card" | "paypal";

export type UnitType = "kg" | "unidad" | "lata" | "caja" | "pieza";
