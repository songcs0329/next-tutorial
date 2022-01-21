import { atom } from "recoil";

export const userInfoState = atom({
	key: "userInfoState",
	default: {
		isLogin: true,
		name: 'songcs',
		email: 'songcs0329@gmail.com',
	}
})