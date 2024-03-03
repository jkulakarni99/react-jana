import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cartStore";
const appStore = configureStore(
    {
        reducer: {
            cart: cartStore
        }
    }
);

export default appStore