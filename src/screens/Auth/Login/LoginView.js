import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { styles } from "../../../styles/Styles";
import { signInWithEmail } from "../../../supabase/supabaseFunctions";
import CustomTextInput from "../../../components/TextInputs/CustomTextInput";
import CustomPasswordInput from "../../../components/TextInputs/CustomPasswordInput";
import { scale } from "react-native-size-matters";
import CustomKeyboardAvoidingView from "../../../components/CustomViews/CustomKeyboardAvoidingView";
import BackButton from "../../../components/Buttons/BackButton";
import { backgroundColor, green } from "../../../constants/constants";

const LogInView = ({ navigation }) => {

    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');

    const [email, setEmail] = React.useState('kluong264@gmail.com');
    const [password, setPassword] = React.useState('Incorect94544!');
    const [showPass, setShowPass] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>

            {/* Header & TextFields */}

            <CustomKeyboardAvoidingView style={{ flex: 1, justifyContent: "space-between" }}>

                {/* Header */}

                <TouchableOpacity
                    style={{ alignSelf: "baseline" }}
                    onPress={() => navigation.goBack()}
                >
                    <BackButton />
                </TouchableOpacity>

                {/* Logo */}

                <View style={{ alignItems: 'center' }}>

                    {/* Logo */}

                    <View style={{ alignItems: 'center', flexDirection: "row" }}>
                        <Text style={styles.logo}>CASHFLOW</Text>
                        <Image
                            style={{ height: scale(40), width: scale(40), marginLeft: scale(5), marginBottom: scale(10) }}
                            source={require('../../../../assets/logoClear.png')}
                        />
                    </View>

                    {/* Slogan */}

                    <Text style={styles.body('white')}>Money management, redefined.</Text>

                </View>

                {/* TextFields */}

                <View style={{ gap: scale(10), paddingHorizontal: scale(10) }}>

                    <Text style={styles.header('white')}>Log In</Text>

                    <CustomTextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder={"Email"}
                        loading={null}
                    />

                    <CustomPasswordInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder={"Password"}
                        loading={null}
                    />

                    <TouchableOpacity
                        style={{ alignSelf: 'center' }}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.body('white')}>Don't have an account? <Text style={styles.body(green)}>Sign up.</Text></Text>
                    </TouchableOpacity>


                </View>

                <View />

                <View />

            </CustomKeyboardAvoidingView >

            {/* Log In Button */}

            <TouchableOpacity
                style={{
                    backgroundColor: email != "" && password != "" ? green : 'white',
                    borderRadius: 100,
                    paddingHorizontal: scale(20),
                    paddingVertical: scale(13),
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: scale(40)
                }}
                onPress={() => signInWithEmail(email, password)}
            >
                <Text style={styles.subHeader('black')}>Log In</Text>
            </TouchableOpacity>

        </View>
    );
};

export default LogInView;