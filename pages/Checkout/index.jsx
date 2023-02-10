import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../slices/cartSlice';
import WhatsappCheckout from '../../components/ui/CartComponent/WhatsappCheckout';
import CartItem from './CartItem';
import CheckoutButton from '../../components/ui/CartComponent/CheckoutButton';
import Link from 'next/link';

export default function index() {
	const cartItems = useSelector((state) => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		let num = 0;
		for (let i = 0; i < cartItems.length; i++) {
			num =
				num +
				parseFloat(cartItems[i].item.price * cartItems[i].quantity);
		}
		setTotalPrice(num);
	}, [cartItems]);
	const dispatch = useDispatch();

	return (
		<>
			<Header />
			{cartItems.length != 0 ? (
				<main className=" mx-auto mt-28 flex flex h-fit max-w-7xl flex-col justify-center p-5">
					{cartItems.map((item, index) => (
						<CartItem key={index} {...item} />
					))}
					<h1 className=" mx-auto my-6 font-bold capitalize tablet:mx-0">
						total price: {totalPrice}JOD
					</h1>
					<div className=" flex w-full flex-col items-center justify-evenly font-bold tablet:ml-auto tablet:w-fit tablet:flex-row">
						<div className="my-4 flex  max-w-xs">
							<button
								className=" w-full rounded-xl border-2 border-secondery
			 bg-secondery py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-secondery"
								onClick={() => dispatch(clearItems())}
							>
								Stay Here and CheckOut
							</button>
						</div>
						<span className="mx-2">or</span>

						<div className="my-4 flex  max-w-xs">
							<WhatsappCheckout
								clearItems={clearItems}
								cartItems={cartItems}
							/>
						</div>
					</div>
				</main>
			) : (
				<h1 className=" my-auto flex h-[70vh] items-center justify-center font-bold capitalize">
					{'you have no items in your cart :('}
				</h1>
			)}
			<Footer />
		</>
	);
}
