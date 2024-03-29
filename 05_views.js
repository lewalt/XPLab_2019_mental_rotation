// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This experiment is about mental rotation.
            <br />
            <br />
            It will take approximatly <strong>5 minutes</strong> to complete.`,
   buttonText: 'Begin the experiment'

});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions',
    title: 'General Instructions',
    text:  `In each trial you will see a picture of two geometrical objects.
			<br />
			<br />
			Compare if those objects are of the same or different shape.
			<br />
			Give your answer using j for 'same' and f for 'different'.
      <br />
      <br />
      Answer as quickly and accurately as possible.`,
    buttonText: 'go to trials'

});

// instructions before practice
const instructions_before_practice = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_before_practice',
    title: 'Instructions before practice',
    text:  `In the following you have 5 practice trials and receive feedback.`,
    buttonText: 'go to practice'

});

// instructions before trials
const instructions_before_trial = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_before_trial',
    title: 'Instructions before trial',
    text:  `Let the real experiment begin muhahaha.`,
    buttonText: 'go to trial'

});




// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Here, we initialize a key_press view for the practice trial
const practice = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: key_press_training.length,
    // name and trial_type should be identical to the variable name
    name: 'practice',
    trial_type: 'practice',
    data: key_press_training,
    // realize 1 s inter-trial pause
    pause: 1000,
    // realize 500 ms fixiation cross
    fix_duration: 500,
    // add hook to control for correctness
    hook: {
      after_response_enabled: check_response
    }

});


// Here, we initialize a keypress view
const key_press_5 = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: key_press_task.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_5',
    trial_type: 'key_press_5',
    data: key_press_task,
    // realize 1 s inter-trial pause
    pause: 1000,
    // realize 500 ms fixiation cross
    fix_duration: 500

});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
