import { 
    CHECK_USERNAME_SERVICE, 
} from '../../api/eventService'

export const  authSlice = (set) => ({
    token: localStorage.getItem('learnile') ?? '',
    user: {},
    isLoginIn: false,
    isSigningUp: false,
    role: [],
    updateLoginStatus:(val) => set({isLoginIn: val}),
    login: (data) => loginAction(set,data),
    register: () => registerAction(set, data),
    checkUser: () => checkUsernameAction(set, data),
})  

const checkUsernameAction = async (set,data) => {
    try{
       const res = await CHECK_USERNAME_SERVICE(data)
        if(res){
           console.log(res)
           set((state) => ({ user: state.user}))
           return;
        }
        throw new Error('Cannot Log user in')
    }catch(error){
        console.log( error? error : 'OopsSomething Went wrong')    
    }
}