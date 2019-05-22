// In this file you can specify the trial data for your experiment

// array with all pictures
var pictures = [];
// all possible variable types
var picture_number = 15;
var picture_rotation = [50, 150];
var picture_types = ['same', 'different'];


for(var i = 1; i <= picture_number; i++){
	for(var j = 0; j < picture_rotation.length; j++){
		for(var k = 0; k < picture_types.length; k++){
			console.log('mental_rotation_images/' + i + '_'+ picture_rotation[j] + '_' + picture_types[k] + '.jpg');
			pictures.push({

				question: "Are the two objects same or different?",
        picture: 'mental_rotation_images/' + i + '_'+ picture_rotation[j] + '_' + picture_types[k] + '.jpg',
        key1: 'f',
        key2: 'j',
        f: 'different',
        j: 'same',
				number: i,
				rotation: picture_rotation[j],
				expected: picture_types[k],


			})




			// // push in dictionary
			// pictures.push({
			// 	key: picture + "_" + picture_rotation[j] + "_" + picture_types[k] + ".jpg")
			// 	value:
			// }

		}
	}
}

const key_press_trials = _.shuffle(pictures)

const key_press_training = key_press_trials.slice(0,5)

const key_press_task = key_press_trials.slice(5,60)

// const key_press_trials = _.shuffle([
//
// 	{
//         question: "Are the two objects same or different?",
//         picture: 'mental_rotation_images/9_50_same.jpg',
//         key1: 'f',
//         key2: 'j',
//         f: 'different',
//         j: 'same',
// 				number: 9,
// 				rotation: 50,
// 				expected: 'same',
//         //correct: 'same'
//     },
// 	{
//         question: "Are the two objects same or different?",
//         picture: 'mental_rotation_images/12_150_different.jpg',
//         key1: 'f',
//         key2: 'j',
//         f: 'different',
//         j: 'same',
// 				number: 12,
// 				rotation: 150,
// 				expected: 'different',
//         //correct: 'different'
//     },
// 	{
//         question: "Are the two objects same or different?",
//         picture: 'mental_rotation_images/14_50_same.jpg',
//         key1: 'f',
//         key2: 'j',
//         f: 'different',
//         j: 'same',
// 				number: 14,
// 				rotation: 50,
// 				expected: 'same',
//         //correct: 'same'
//     },
// 	{
//         question: "Are the two objects same or different?",
//         picture: 'mental_rotation_images/1_50_different.jpg',
//         key1: 'f',
//         key2: 'j',
//         f: 'different',
//         j: 'same',
// 				number: 1,
// 				rotation: 50,
// 				expected: 'different',
//         //correct: 'different'
//     },
//     {
//         question: "Are the two objects same or different?",
//         picture: 'mental_rotation_images/3_150_same.jpg',
//         key1: 'f',
//         key2: 'j',
//         f: 'different',
//         j: 'same',
// 				number: 3,
// 				rotation: 150,
// 				expected: 'same',
//         //correct: 'same'
//     }
// ]);
