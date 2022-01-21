import { atom, selector } from "recoil";

export const userInfoState = atom({
	key: "userInfoState",
	default: {
		isLogin: true,
		name: 'songcs',
		email: 'songcs0329@gmail.com',
	}
})

export const counterState = atom({
	key: "counterState",
	default: 0
})

export const multipleCounterState = selector({
	key: "multipleCounterState",
	get: ({ get }) => {
		const counter = get(counterState)
		return counter * 2
	}
})