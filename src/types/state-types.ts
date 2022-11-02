export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    date: string
    sender: string
    message: string
}
export type PostType = {
    id: number
    post: string
}
export type UserType = {
    avatar: string
    firstName: string
    followed: boolean
    lastName: string
    location: string
    userId: number
}