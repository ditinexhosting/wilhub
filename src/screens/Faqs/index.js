import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';
import style from './style'
import Config from 'src/config'
import { about_us_background } from 'src/assets'
import API from 'src/services/api'
import * as ACTION from 'src/reduxData/action'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, useLanguage } from 'src/hooks'
import { Container } from 'src/components'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'

export default ({ navigation }) => {

    const [Colors, styles] = useTheme(style)
    const translate = useLanguage().t
    const dispatch = useDispatch()
    const sessionReducer = useSelector(state => state.sessionReducer)

    useEffect(() => {

    }, [])

    return (
        <Container isTransparentStatusBar={false}>
            <ImageBackground source={about_us_background} style={styles.background} >
                <ScrollView>
                    <View
                        style={styles.backButton}
                    >
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Icon name={'chevron-left'} size={20} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.header]}>
                        <Text style={styles.headerText}>FAQs</Text>
                    </View>
                    <Text style={styles.titleText}>Asked Questions</Text>
                    <Text style={styles.questionText}>1. Is there a course fee for the programmes offered?</Text>
                    <Text style={styles.descriptionText}>
                    Yes. There is a fixed fee structure depending on the standard of living in the student’s country of residency.
                    </Text>
                    <Text style={styles.questionText}>2. What are the benefits of studying on Wil Hub?</Text>
                    <Text style={styles.descriptionText}>
                    WIL HUB offers authentic Islamic teachings based on the Qur’an and the Sunnah. WIL HUB also covers contemporary courses such as psychology, home science, information technology, etc. all of which are taught from an Islamic perspective to help students gain a better understanding of Islamic values and ethics and to enable them to live their lives in accordance with them.
                    </Text>
                    <Text style={styles.questionText}>3. Where is Wil Hub based? </Text>
                    <Text style={styles.descriptionText}>
                    WIL HUB is an online institution, which means it can be accessed from anywhere with an internet connection and a computer or smart device. Although Wil Hub’s headquarters are in Kerala, the entire study is conducted online, with the exception of Mawadha, which is also conducted offline.
                    </Text>
                    <Text style={styles.questionText}>4. What is the goal of Wil Hub's establishment?  </Text>
                    <Text style={styles.descriptionText}>
                    It was established with the goal of educating future generations and imparting Islamic knowledge to society in a way that is both accessible and inexpensive to everyone.
                    </Text>
                    <Text style={styles.questionText}>5. Which school of thought does Wil Hub follow?   </Text>
                    <Text style={styles.descriptionText}>There are no Madhab-sectarian factions in the syllabus.
                    </Text>
                    <Text style={styles.questionText}>6. What programmes does Wil Hub offer? </Text>
                    <Text style={styles.descriptionText}>Diploma in Islamic Studies, Diploma in Parenting and Home Management, Mawadha Course (Pre-Marital, Marital, Post Marital) are the courses which are being provided now.
                    </Text>
                    <Text style={styles.questionText}>7. Where does the study take place? </Text>
                    <Text style={styles.descriptionText}>WilHub is an "online educational resource." The entire programme is delivered exclusively online (Mawadha courses are available offline too). If you have access to a computer and an internet connection, anyone from anywhere in the globe can easily join and benefit from it.
                    </Text>
                    <Text style={styles.questionText}>8. Who are the students of Wil Hub?</Text>
                    <Text style={styles.descriptionText}>Wil Hub accepts students who want to learn authentic Islamic knowledge obtained accurately from the Qur'an and Sunnah as understood by the early generations of righteous scholars, as well as those who want to learn how to be a good parent and spouse by learning Islamic and psychological etiquette The students represent a diverse group coming from both developing and developed countries.
                    </Text>
                    <Text style={styles.questionText}>9. Is there any kind of prerequisite education required before enrolling? </Text>
                    <Text style={styles.descriptionText}>There is no prior educational qualification required for the courses offered at Wil Hub. As for the Diploma in Islamic Studies one has to complete his/her high school graduation or be at least 15 years at the time of admission.
                    </Text>
                    <Text style={styles.questionText}>10. Is there any age limit to join the courses?</Text>
                    <Text style={styles.descriptionText}>There are different courses at Wil Hub:{"\n"}
                        1. Diploma in Islamic Studies is for students between the age group 15 to 25.{"\n"}
                        2. Diploma in Parenting and Home Management are for the age group
                    </Text>
                    <Text style={styles.questionText}>11. What is the language of instruction at Wil Hub?</Text>
                    <Text style={styles.descriptionText}>Courses are now taught in Malayalam. In the coming year, the courses will be available in English and Urdu.
                    </Text>
                    <Text style={styles.questionText}>12. Is Wil Hub's courses accredited?</Text>
                    <Text style={styles.descriptionText}>Wil Hub is registered in Kerala. Wil Hub is pursuing accreditation from universities in its home country of India, as well as around the world.
                    </Text>
                    <Text style={styles.questionText}>13. May I inquire as to which colleges have accepted Wil Hub's graduates for higher / postgraduate courses based on Wil Hub's authorised programmes?</Text>
                    <Text style={styles.descriptionText}>It is quite difficult to keep track of this.
                    </Text>
                    <Text style={styles.questionText}>14. Is Wil Hub's programme useful for job applications?</Text>
                    <Text style={styles.descriptionText}>Wil Hub's certification is unquestionably an asset on your resume.
                    </Text>
                    <Text style={styles.questionText}>15. Has Wil Hub signed any memorandums (MoUs) of understanding with universities around the world?</Text>
                    <Text style={styles.descriptionText}>No
                    </Text>
                    <Text style={styles.questionText}>16. What are the class schedules at Wil Hub?</Text>
                    <Text style={styles.descriptionText}>Each course has a varied schedule that is tailored to the student's comforts.
                    </Text>
                    <Text style={styles.questionText}>17. What will I do if I have a poor network connection?</Text>
                    <Text style={styles.descriptionText}>1. Consider relocating to a location with better internet access.{"\n"}
                    2. Install a high-speed Internet connection.{"\n"}
                    3. If you are unable to attend the live class due to technical difficulties, the recorded classes will be of assistance.
                    </Text>
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}