/* eslint-disable @typescript-eslint/no-unused-vars */
import { Students } from "../models"
import { ListRespone } from "../models/common"

import instance from "./axiosClient"

export const ctyApi = {
    getAll(): Promise<ListRespone<Students>> {
        const url = '/students'
        return instance.get(url)
    },
    add(data: Students): Promise<Students> {
        const url = '/students'
        return instance.post(url, data)
    },
    update(data: Students): Promise<Students> {
        const url = '/students'
        return instance.put(url, data)
    },
    remove(id: String): Promise<any> {
        const url = `/students/${id}`
        return instance.delete(url)
    },
    read(id: String): Promise<any> {
        const url = `/students/${id}`
        return instance.get(url)
    }

}
export default ctyApi