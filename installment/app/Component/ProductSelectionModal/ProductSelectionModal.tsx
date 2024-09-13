/* eslint-disable @next/next/no-img-element */
// ProductSelectionModal.tsx
"use client";
import React, { useState } from "react";
import { Modal, Input, Select, Form, Typography, Button, message } from "antd";

const { Text } = Typography;
const { Option } = Select;

interface Product {
  value: string;
  label: string;
  description: string;
  image: string;
  price: string;
  oldPrice: string;
}

interface ProductSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  products: Product[];
}

const ProductSelectionModal: React.FC<ProductSelectionModalProps> = ({
  visible,
  onClose,
  products,
}) => {
  const [form] = Form.useForm(); // Initialize form instance
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProduct2, setSelectedProduct2] = useState<Product | null>(
    null
  );
  const [selectedProduct3, setSelectedProduct3] = useState<Product | null>(
    null
  );
  const handleProductSelect = (value: string) => {
    const selected = products.find((product) => product.value === value);
    setSelectedProduct(selected || null);
  };

  const handleProduct2Select = (value: string) => {
    const selected = products.find((product) => product.value === value);
    setSelectedProduct2(selected || null);
  };
  const handleProduct3Select = (value: string) => {
    const selected = products.find((product) => product.value === value);
    setSelectedProduct3(selected || null);
  };
  const parsePrice = (price: string) => {
    return parseFloat(price.replace(/[^0-9,]/g, "").replace(/,/g, ""));
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    let total = 0;
    if (selectedProduct) total += parsePrice(selectedProduct.price);
    if (selectedProduct2) total += parsePrice(selectedProduct2.price);
    if (selectedProduct3) total += parsePrice(selectedProduct3.price);
    return total;
  };

  // Handle form submission
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (!selectedProduct && !selectedProduct2 && !selectedProduct3) {
        message.error("Vui lòng chọn ít nhất 1 sản phẩm.");
        return;
      }
      const now = new Date();
      const orderDateTime = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(
        now.getHours()
      ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      // Collect form data and selected products
      const orderData = {
        customerName: values.customerName,
        phoneNumber: values.phoneNumber,
        orderDateTime,
        totalPrice: calculateTotalPrice(), // Call the function here
        selectedProducts: [
          selectedProduct,
          selectedProduct2,
          selectedProduct3,
        ].filter(Boolean),
      };

      // Send data to Google Sheets (you need to implement this function)
      sendOrderDataToGoogleSheets(orderData);

      // Reset form and close modal
      form.resetFields();
      setSelectedProduct(null);
      setSelectedProduct2(null);
      setSelectedProduct3(null);
      onClose();
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendOrderDataToGoogleSheets = async (data: any) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwPPkj2UkTfDQL3bf4exVf2tHrM0v_tHmnWlMeM-T0zg0ivqG2QqNtlWY-snQL1_uXUBg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Check if the response is okay
      if (status === "success") {
        const result = await response.json();
        message.success(
          "Đơn hàng của bạn đã được gửi thành công!",
          result.message
        );
      } else {
        message.error("Đã xảy ra lỗi khi gửi đơn hàng. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }
  };

  return (
    <Modal
      centered
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <h4 style={{ textAlign: "center" }}>Combo Siêu Rẻ 1</h4>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Tên khách hàng *"
          name="customerName"
          rules={[{ required: true, message: "Họ và tên khách hàng" }]}
        >
          <Input placeholder="Họ và tên khách hàng" />
        </Form.Item>
        <Form.Item
          label="Số điện thoại *"
          name="phoneNumber"
          rules={[{ required: true, message: "Số điện thoại" }]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>

        {/* Product Selection */}
        <Form.Item label="Cường lực">
          <Select
            placeholder="Chọn Sản phẩm"
            onChange={handleProductSelect}
            className="CusTomSelectHeight"
            allowClear
            value={selectedProduct?.value}
          >
            {products.map((product) => (
              <Option key={product.value} value={product.value}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={product.image}
                    alt={product.label}
                    style={{ width: 50, marginRight: 10 }}
                  />
                  <div>
                    <Text strong>{product.label}</Text>
                    <br />
                    <Text style={{ color: "red" }}>{product.price}</Text>{" "}
                    <Text delete>{product.oldPrice}</Text>
                  </div>
                </div>
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Product 2">
          <Select
            placeholder="Chọn Sản phẩm"
            onChange={handleProduct2Select}
            className="CusTomSelectHeight"
            allowClear
            value={selectedProduct2?.value}
          >
            {products.map((product) => (
              <Option key={product.value} value={product.value}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={product.image}
                    alt={product.label}
                    style={{ width: 50, marginRight: 10 }}
                  />
                  <div>
                    <Text strong>{product.label}</Text>
                    <br />
                    <Text style={{ color: "red" }}>{product.price}</Text>{" "}
                    <Text delete>{product.oldPrice}</Text>
                  </div>
                </div>
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Product3">
          <Select
            placeholder="Chọn Sản phẩm"
            onChange={handleProduct3Select}
            className="CusTomSelectHeight"
            allowClear
            value={selectedProduct3?.value}
          >
            {products.map((product) => (
              <Option key={product.value} value={product.value}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={product.image}
                    alt={product.label}
                    style={{ width: 50, marginRight: 10 }}
                  />
                  <div>
                    <Text strong>{product.label}</Text>
                    <br />
                    <Text style={{ color: "red" }}>{product.price}</Text>{" "}
                    <Text delete>{product.oldPrice}</Text>
                  </div>
                </div>
              </Option>
            ))}
          </Select>
        </Form.Item>
        {/* Total Price and Note */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Text strong style={{ color: "red" }}>
            Tổng cộng: {calculateTotalPrice().toLocaleString()}đ (Giảm 100k khi
            mua kèm Combo 2 món)
          </Text>
          <br />
          <Text type="secondary">
            **Lưu ý: Giá sản phẩm chỉ áp dụng khi mua đủ Combo
          </Text>
        </div>

        {/* Order Button */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button
            type="primary"
            size="large"
            onClick={handleSubmit}
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Đặt hàng ngay
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ProductSelectionModal;
