import dayjs from 'dayjs'

export const formatDate = input => dayjs(input).format('YYYY-MM-DD')
export const formatTime = input => dayjs(input).format('YYYY-MM-DD HH:mm:ss')
