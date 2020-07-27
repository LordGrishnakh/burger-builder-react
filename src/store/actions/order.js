import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";
import Axios from "axios";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    Axios.post("https://burger-app-af019.firebaseio.com/orders.json", orderData)
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
// export const purchaseBurger = (orderData, token) => {
//   return dispatch => {
//     dispatch(purchaseBurgerStart());
//     Axios.post("https://burger-app-af019.firebaseio.com/orders.json?auth=" + token, orderData)
//       .then(response => {
//         dispatch(purchaseBurgerSuccess(response.data, orderData));
//       })
//       .catch(error => {
//         dispatch(purchaseBurgerFail(error));
//       });
//   }
// };

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams = '?orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("https://burger-app-af019.firebaseio.com/orders.json" + queryParams)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

export const deleteOrderStart = () => {
  return {
    type: actionTypes.DELETE_ORDER_START,
  };
};

export const deleteOrderSuccess = (id) => {
  return {
    type: actionTypes.DELETE_ORDER_SUCCESS,
    orderId: id,
  };
};

export const deleteOrderFailed = (err) => {
  return {
    type: actionTypes.DELETE_ORDER_FAILED,
    error: err,
  };
};

export const deleteOrder = (id) => {
  return (dispatch) => {
    let orderRecordName = "";
    dispatch(deleteOrderStart());
    const queryParams = '?orderBy="orderId"&equalTo="' + id + '"';
    Axios.get("https://burger-app-af019.firebaseio.com/orders.json" + queryParams)
      .then(orderRecord => {
        orderRecordName = Object.keys(orderRecord.data)
      })
      .then(res => {
        Axios.delete(
          `https://burger-app-af019.firebaseio.com/orders/${orderRecordName}.json`// + queryParams
        )
          .then((data) => {
            dispatch(deleteOrderSuccess(id));
          })
          .catch((err) => {
            dispatch(deleteOrderFailed(err));
          });
      })
      .catch((err) => {
        dispatch(deleteOrderFailed(err));
      });
  };
};
