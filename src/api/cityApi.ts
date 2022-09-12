/* eslint-disable @typescript-eslint/no-unused-vars */
import { ListRespone } from "../models/common"
import { cty } from "../models/cty"
import instance from "./axiosClient"

export const ctyApi =
{
    getAll(): Promise<ListRespone<cty>> {
        const url = '/cities'
        return instance.get(url, {
            params: {
                _page: 1,
                _limit: 10,

            }
        })
    }
}
export default ctyApi