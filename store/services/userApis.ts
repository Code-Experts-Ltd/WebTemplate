import { Api } from '@/utils/Api'

export const usersApi = Api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
        }),
    }),
})

export const { useGetUsersQuery } = usersApi
