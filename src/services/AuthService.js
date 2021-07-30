class AuthService {
    logout() {
        window.localStorage.removeItem("accessToken");
    }
}

export const authService = new AuthService();
