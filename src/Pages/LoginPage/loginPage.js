import React from 'react'
import './loginpage.css'

const LoginPage = () => {
    return (
        <>
        <div className="LoginContainer" style={{width: '100%', height: '100%', padding: 10, background: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="LoginDetails" style={{alignSelf: 'stretch', padding: 10, background: '#264ECA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div className="Rectangle37" style={{height: 170, padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 29, display: 'flex'}}>
                    <div className="Rectangle37" style={{width: 32, height: 32, background: '#5F6FFF'}} />
                    <div className="Frame2" style={{alignSelf: 'stretch', height: 89, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'flex'}}>
                        <div className="Login" style={{color: 'white', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Login</div>
                        <div className="SeeYourGrowthAndGetSupport" style={{width: 260, color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>See your growth and get support!</div>
                    </div>
                </div>
                <div className="InputCollection" style={{width: 430, padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'flex'}}>
                    <div className="Group4" style={{height: 223, position: 'relative'}}>
                        <div className="Rectangle34" style={{width: 410, height: 109, padding: 10, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                            <div className="Email" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Username*</div>
                            <div className="Rectangle34" style={{alignSelf: 'stretch', height: 60, paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 15, background: '#EDF0F2', borderRadius: 5, border: '0.50px #8F8F8F solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div className="EnterYouEmail" style={{color: 'rgba(0, 0, 0, 0.68)', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Enter your Username</div>
                            </div>
                        </div>
                        <div className="Rectangle35" style={{width: 410, height: 109, padding: 10, left: 0, top: 114, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                            <div className="Email" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Password*</div>
                            <div className="Rectangle34" style={{alignSelf: 'stretch', height: 60, paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 15, background: '#EDF0F2', borderRadius: 5, border: '0.50px #8F8F8F solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div className="EnterYouEmail" style={{color: 'rgba(0, 0, 0, 0.68)', fontSize: 15, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Enter your password</div>
                            </div>
                        </div>
                    </div>
                    <div className="Rectangle39" style={{width: 410, padding: 10, justifyContent: 'space-between', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="Group3" style={{width: 160, position: 'relative'}}>
                            <div className="Rectangle39" style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 5, border: '0.50px white solid'}} />
                            <div className="RememberMe" style={{left: 40, top: 0, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Remember me</div>
                        </div>
                        <div className="ForgotPassword" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Forgot password?</div>
                    </div>
                    <div className="Component4" style={{width: 410, height: 60, position: 'relative'}}>
                        <div className="Button" style={{width: 410, height: 60, paddingLeft: 20, paddingRight: 20, paddingTop: 12, paddingBottom: 12, left: 0, top: 0, position: 'absolute', background: '#5F6FFF', borderRadius: 7}} />
                        <div className="Login" style={{width: 115, height: 34, left: 148, top: 13, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Nunito Sans', fontWeight: '700', wordWrap: 'break-word'}}>LogIn</div>
                    </div>
                    <div className="Rectangle40" style={{width: 410, padding: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="NotRegesteredYetCreateANewAccount" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Not regestered yet? Create a new account</div>
                    </div>
                </div>
            </div>
            <div className="Frame21" style={{flex: '1 1 0', alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                <img className="Image3" style={{flex: '1 1 0', alignSelf: 'stretch'}} src="https://via.placeholder.com/830x781" />
            </div>
        </div>
        </>

    );
}

export default LoginPage;