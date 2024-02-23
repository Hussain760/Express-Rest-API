import { Request, Response } from "express"
import Data from "../Database/Todos.json"

export const getData = (request: Request, response: Response) => {
    try {
        const { completed } = request.query

        if (completed === "true") {

            const filterData = Data.filter(item => item.completed === true)

            response.status(200).json(filterData)
            return null
        } else if (completed === "false") {

            const filterData = Data.filter(item => item.completed === false)

            response.status(200).json(filterData)
            return null
        }

        response.status(200).json(Data)
    } catch (error) {
        response.status(404).json("Resource Does Not Found")
    }
}

export const getDatabyID = (request: Request, response: Response) => {
    try {
        const { ID } = request.params

        const singleData = Data.find(item => item.id === Number(ID))

        if (!singleData) {
            throw new Error()
        }

        response.status(200).json(singleData)
    } catch (error) {
        response.status(404).json("Resource Dose Not Found")
    }
}

export const addData = (request: Request, response: Response) => {
    try {
        const { title } = request.body

        if (!title) {
            throw new Error()
        }

        const newData = {
            id: Data.length + 1,
            title,
            completed: false
        }

        Data.push(newData)

        response.status(200).json("New Data has been added")
    } catch (error) {
        response.status(400).json("Please provide the title")
    }
}

export const updateData = (request: Request, response: Response) => {
    try {
        const { ID } = request.params
        
        const getSingleData = Data.find(item => item.id === Number(ID))

        if (!getSingleData) {
            throw new Error("Resource Does Not Found")
        }

        const { title, completed }: { title: string, completed: boolean } = request.body

        if (!title && completed === undefined) {
            throw new Error()
        }

        getSingleData.title = title || getSingleData.title

        getSingleData.completed = completed !== undefined ? completed : getSingleData.completed
        
        response.status(200).json("Data has been updated")
    } catch (error) {
        response.status(404).json("Please provide the title or completed")
    }
}

export const deleteData = (request: Request, response: Response) => {
    try {
        const { ID } = request.params

        const getSingleData = Data.find(item => item.id === Number(ID))

        if (!getSingleData) {
            throw new Error()
        }

        Data.splice(Data.indexOf(getSingleData), 1)

        response.status(200).json("Data has been deleted")
    } catch (error) {
        response.status(400).json("Resource Does Not Found")
    }
}