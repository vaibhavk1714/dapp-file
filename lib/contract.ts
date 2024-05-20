import { getContract } from "thirdweb";
import { client } from "./client";
import { chain } from "./chain";

export const contract = getContract({
	client: client,
	chain: chain,
	address: "0x8Ec1f52344BD538d0BffFB3C7Fb6fA11e646Fb38",
});
