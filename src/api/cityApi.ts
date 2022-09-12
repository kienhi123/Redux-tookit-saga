/* eslint-disable @typescript-eslint/no-unused-vars */
import instance from "./axiosClient"

export const ctyApi =
{
    getAll() {
        const url = '/cities'
        return instance.get(url)
    }
}
export default ctyApi