# 25-5-Clock
App created mainly with JavaScript which functions as a Pomodoro Tracker, allowing the user to set alarms for session and break time as a real clock.
<br>
<br>
When the timer is running, the user could see the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms). Pressing the "Start" button allows the user to stop the countdown and resume it from the point at which it was paused when pressed again.
<br>
<br>
When a session countdown reaches zero and a new countdown begins, a string will indicate that a break has begun, and vice versa. Also, a sound indicating that time is up will play to alert the user, but it will stop playing and be rewound to the beginning when the "Reset" button is pressed or after waiting one second.
<br>
<br>
The user cand increment and decrement any time the duration of the session or break in course, aside from resetting the countdown with the "Reset" button.

<br>

| [:camera: Screenshots](#screenshots) | [🤝 Contributing](#contributing) | [🔖 License](#license) |
|  -------- | ----------- | ----------- |

<br>

## Screenshots

![clock](https://github.com/ricardobar96/25-5-Clock/assets/73242474/13116f12-6907-44cf-9091-ca304fc9c717)

<br>

## Contributing
If you want to contribute to this proyect, follow these steps:

<br>

1. Fork the repository.
3. Clone your fork.
4. Check that your fork is the "origin" remote.
5. Add the project repository as the "upstream" remote using `git remote add upstream https://github.com/ricardobar96/25-5-Clock.git`.
6. Pull the latest changes from upstream into your local repository using `git pull upstream master`.
7. Create a new branch using `git checkout -b BRANCH_NAME`.
8. Make your changes and commit them: `git commit -m 'DESCRIPTION OF CHANGES'`.
9. Push your changes to your fork `git push origin BRANCH_NAME`.
10. Create a pull request.
 
<br>

If you have any doubts, consult [this](https://www.dataschool.io/how-to-contribute-on-github/) guide

<br>

## License
This project is licensed under the [MIT License](LICENSE.txt).
