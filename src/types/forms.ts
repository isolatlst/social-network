//---Login Inc Data Type
export type LoginDataType = {
    email: string
    password: string
}
//---Register Inc Data Type
export type RegisterDataType = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}
//---Update Profile Inc Data Type
export type UpdateProfileDataType = {
    avatar: string
    birth: string
    education: string
    location: string
    site: string
} | { [key: string]: string }


export type SendMessageType = {
    newMessageData: string
}
export type NewPostType = {
    newPostData: string
}
