import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {ThunkDispatch} from 'redux-thunk/es/types';
import {AppStateType} from "../redux/redux-store";

// export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppDispatch: () => ThunkDispatch<AppStateType, any, any> = useDispatch // ласт параметр только санки
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector