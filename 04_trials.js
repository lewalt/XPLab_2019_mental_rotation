// In this file you can specify the trial data for your experiment

const key_press_trials = _.shuffle([

	{
        question: "Are the two objects same or different?",
        picture: 'mental_rotation_images/9_50_same.jpg',
        key1: 'f',
        key2: 'j',
        f: 'different',
        j: 'same',
		number: 9,
		rotation: 50,
        expected: 'same'
    },
	{
        question: "Are the two objects same or different?",
        picture: 'mental_rotation_images/12_150_different.jpg',
        key1: 'f',
        key2: 'j',
        f: 'different',
        j: 'same',
		number: 12,
		rotation: 150,
        expected: 'different'
    },
	{
        question: "Are the two objects same or different?",
        picture: 'mental_rotation_images/14_50_same.jpg',
        key1: 'f',
        key2: 'j',
        f: 'different',
        j: 'same',
		number: 14,
		rotation: 50,
        expected: 'same'
    },
	{
        question: "Are the two objects same or different?",
        picture: 'mental_rotation_images/1_50_different.jpg',
        key1: 'f',
        key2: 'j',
        f: 'different',
        j: 'same',
		number: 1,
		rotation: 50,
        expected: 'different',
    },
    {
        question: "Are the two objects same or different?",
        picture: 'mental_rotation_images/3_150_same.jpg',
        key1: 'f',
        key2: 'j',
        f: 'different',
        j: 'same',
		number: 3,
		rotation: 150,
        expected: 'same'
    }
]);
