import request from '../utils/request';

let url = '/api/auth/oauth/token'
export default {
    namespace: 'login',
    state: {
        userInfo: {

        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });
        },
        *login({ payload, history }, { call, put }) {
            const res = yield call(request, url, {
                headers: {
                    "Authorization": "Basic YXNzZW1ibHlQbGF0Zm9ybTphc3NlbWJseVBsYXRmb3Jt"
                },
                method: 'POST',
                body: {
                    payload
                }
            });
            if (res.errorCode === 0) {
                // Api._setCookie('userToken', res.access_token)
                const userInfo = yield put({ type: 'getUserInfo' })
                console.log(userInfo)
                // Api.userInfo = res;
                yield put({ type: 'save', payload: { userInfo: { ...userInfo.data, ...res.access_token } } });
                // callback && typeof callback === 'function' && callback(res.data);
                history.push('/')
            }
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
}