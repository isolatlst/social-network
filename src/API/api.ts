import {Method} from 'axios'

export const _getConfig = (method: Method, url: string, data = null as any) => ({
    method,
    url,
    xhrFields: {
        withCredentials: true
    },
    data
})

