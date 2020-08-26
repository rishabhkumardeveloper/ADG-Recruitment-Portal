

var getQuestions =()=> {
    var questions= [{
        "1" : {
            "type" : "mcq",
            "ques" : "This is a mcq question, please select the answer from the options given",
            "option" : {
                "a" : "true",
                "b" : "false",
                "c" : "maybe",
                "d" : "none"
            }
        },
        "2" : {
            "type" : "mcq",
            "ques" : "This is 2nd mcq question, please select the answer from the options given",
            "option" : {
                "a" : "true",
                "b" : "false",
                "c" : "maybe",
                "d" : "none"
            }
        },
        "3" : {
            "type" : "mcq",
            "ques" : "This is 3rd mcq question, please select the answer from the options given",
            "option" : {
                "a" : "true",
                "b" : "false",
                "c" : "maybe",
                "d" : "none"
            }
        },
        "4" : {
            "type" : "code",
            "ques" : "Write the code for the given problem:"
            
        },
        "5" : {
            "type" : "code",
            "ques" : " 2 Write the code for the given problem:"
            
        }
        
    }]

    return questions;
} 