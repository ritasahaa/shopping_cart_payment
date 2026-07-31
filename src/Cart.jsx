import axios from "axios";

function Cart() {
  const handlePayment = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: 499,
        }
      );

      const options = {
        key: "rzp_test_TK0MiPglv1DCYw",
        amount: data.amount,
        currency: data.currency,
        name: "Rita Shopping Store",
        description: "Wireless Mouse",
        order_id: data.id,

        handler: function (response) {
          alert("✅ Payment Successful");
          console.log(response);
        },

        theme: {
          color: "#0d6efd",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.log(err);
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

        <button onClick={handlePayment}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cart;