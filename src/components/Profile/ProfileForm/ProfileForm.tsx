import {InjectedFormProps, reduxForm} from 'redux-form';
import classes from './ProfileForm.module.css'
import Wallpaper from '../Description/Wallpaper/Wallpaper'
import {createField, Input} from '../../common/FormControls/FormControls'
import React from "react"
import {UpdateProfileDataType} from "../../../types/forms";


type UpdPropsType = {
    avatar: string
    birth: string
    location: string
    education: string
    site: string
}
type UseStateType = {
    setEditMode: (value: boolean) => void
}
type PropsType = {
    wallpaper: string
    updateProfile: (data: UpdateProfileDataType) => void
} & UpdPropsType & UseStateType

const ProfileForm: React.FC<PropsType> = ({setEditMode, wallpaper, updateProfile, ...props}) => {
    const updateProfileData = (formData: UpdateProfileDataType) => {
        let data = {} as { [key: string]: string }
        for (let key in formData) {
            if (formData[key as keyof UpdateProfileDataType]?.trim() !== props[key as keyof UpdateProfileDataType]) {
                data[key] = formData[key as keyof UpdateProfileDataType]?.trim()
            }
        }
        if (Object.keys(data).length) updateProfile(data)
        setEditMode(false)
    }
    return (
        <main>
            < Wallpaper wallpaper={wallpaper}/>
            <ProfileReduxForm initialValues={props} onSubmit={updateProfileData} setEditMode={setEditMode}/>
        </main>
    )
}

const ProfileFormForRedux: React.FC<InjectedFormProps<UpdateProfileDataType, UseStateType> & UseStateType> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div className={classes.description__body}>
            {createField(Input, [], '', 'avatar', 'text', 'Photo link')}
            {createField(Input, [], '', 'birth', 'text', 'Date of Birth')}
            {createField(Input, [], '', 'location', 'text', 'Location')}
            {createField(Input, [], '', 'education', 'text', 'Education')}
            {createField(Input, [], '', 'site', 'text', 'Web Site')}
            <div className={classes.buttons}>
                <button>Save changes</button>
                <button className={classes.exitBtn}
                        onClick={e => {
                            e.preventDefault();
                            props.setEditMode(false)
                        }}>
                    Exit
                </button>
            </div>
        </div>
    </form>)
}

const ProfileReduxForm = reduxForm<UpdateProfileDataType, UseStateType>({form: 'updateProfile'})(ProfileFormForRedux);

export default ProfileForm