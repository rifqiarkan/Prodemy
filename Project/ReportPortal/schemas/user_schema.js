const schemaUser = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        maidenName: {type: 'string'},
        age: {type: 'number'},
        gender: {type: 'string'},
        email: {type: 'string'},
        phone: {type: 'string'},
        username: {type: 'string'},
        password: {type: 'string'},
        birthDate: {type: 'string'},
        image: {type: 'string'},
        bloodGroup: {type: 'string'},
        height: {type: 'number'},
        weight: {type: 'number'},
        eyeColor: {type: 'string'},
        hair: {
            type:'object',
            properties:{
                color: {type: 'string'},
                type: {type: 'string'}
            }
        },
        domain: {type: 'string'},
        ip: {type: 'string'},
        address: {
          type: 'object',
          properties:{
                address: {type: 'string'},
                city: {type: 'string'},
                coordinates: { 
                    type: 'object', 
                    properties: {
                        lat: {type: 'number'},
                        lng: {type: 'number'},
                    }

                },
                postalCode:{type: 'string'},
                state: {type: 'string'},
          }
          
        },
        macAddress: {type: 'string'},
        university: {type: 'string'},
        bank: {
            type: 'object',
            properties: {
                cardExpire: {type: 'string'},
                cardNumber: {type: 'string'},
                cardType: {type: 'string'},
                currency: {type: 'string'},
                iban: {type: 'string'}
            }
          
        },
        // company: {
        //     type: 'object',
        //     properties: {
                
        //     }
        //   address: {
        //     address: '629 Debbie Drive',
        //     city: 'Nashville',
        //     coordinates: [Object],
        //     postalCode: '37076',
        //     state: 'TN'
        //   },
        //   department: 'Marketing',
        //   name: "Blanda-O'Keefe",
        //   title: 'Help Desk Operator'
        // },
        // ein: '20-9487066',
        // ssn: '661-64-2976',
        // userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
        // crypto: {
        //   coin: 'Bitcoin',
        //   wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
        //   network: 'Ethereum (ERC20)'
        // }
      }
    }

export default (schemaUser)