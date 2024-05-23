# React Native Wallet App

This is a React Native Wallet app capable of storing cards and keys using RFID and NFC tags.

**Note**:
- A payment processing system (e.g., Stripe API) is not set up in this app. You will need to implement payment processing on your own.
- Even though the rad is set up, the NFC and card parser is not implemented, as it can be misused for other purposes.

## Tech Stack

This app is built on the MERN stack:
- **M**ongoDB
- **E**xpress
- **R**eact Native
- **N**odeJS

### Prerequisites

Ensure you have the following installed on your development machine:
- Node.js
- MongoDB
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/A2Abdi/WallKey
    cd WallKey
    ```

2. **Install dependencies**:
    ```bash
    npm install
    cd client
    npm install
    ```

3. **Configuration**:
    - Ensure the correct configuration for Android and iOS permissions.
    - Follow the React Native documentation to configure permissions for RFID and NFC tags:
        - [Android Permissions](https://reactnative.dev/docs/permissionsandroid)
        - [iOS Permissions](https://reactnative.dev/docs/permissionsios)

4. **Run the app**:
    - For Android:
        ```bash
        npx react-native run-android
        ```
    - For iOS:
        ```bash
        npx react-native run-ios
        ```

## Usage

This app allows you to:
- Store and manage cards and keys using RFID and NFC tags.

## Security Considerations

- The NFC and card read parser is not included in this app to prevent misuse. If you choose to implement this feature, ensure you follow best practices for security.

## Contribution

We welcome contributions! Please follow the standard GitHub flow for contributing:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Thanks to the open-source community for the tools and libraries that made this project possible.

---

Feel free to reach out if you have any questions or need further assistance.

Thank you!
