import axios from "axios";

function Cart() {
  const handlePayment = async () => {
    try {
      const BASE_URL =
        import.meta.env.MODE === "development"
          ? "http://localhost:5000"
          : "https://shopping-cart-payment-server.onrender.com";

      await axios.post(`${BASE_URL}/api/payment/create-order`, {
        amount: 499,
      });
      console.log("Order Response:", data);

      const options = {
        key: "rzp_test_TK0MiPglv1DCYw",
        amount: data.amount,
        currency: data.currency,
        name: "Rita Shopping Store",
        description: "Wireless Mouse",
        order_id: data.id,

        prefill: {
          name: "Rita",
          email: "rita@gmail.com",
          contact: "9876543210",
        },

        retry: {
          enabled: false,
        },

        modal: {
          escape: true,
          ondismiss: function () {
            console.log("Checkout Closed");
          },
        },

        handler: function (response) {
          console.log("Payment Success:", response);

          alert("✅ Payment Successful");
        },

        theme: {
          color: "#0d6efd",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Payment Error:", err);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg"
          alt="Mouse"
        />

        <h2>Wireless Mouse</h2>

        <div className="rating">⭐⭐⭐⭐⭐</div>

        <p className="price">₹499</p>

        <p className="desc">
          Ergonomic wireless mouse with 2.4GHz connectivity and long battery
          life.
        </p>

        <button onClick={handlePayment}>Buy Now</button>
      </div>
    </div>
  );
}

export default Cart;
