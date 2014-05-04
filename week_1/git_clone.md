[Back](set_up_repo.md)

# Clone a Git repository

"Cloning" a repository copies what's on Github to your computer.

### Find your repository SSH url

The SSH ("Secure Shell") url is what you will use to clone your repository with git.

You can find it at the bottom of the left sidebar on your repository page on Github.

![Clone a repo](https://raw.github.com/Devbootcamp/phase_0_unit_1/master/week_1/imgs/github-command.jpg)

### Clone it!

1. Open your terminal
2. Change to the directory where you will keep your code repository folder <br /><br />`cd dbc/phase_0/`<br /><br /> I highly recommend that you keep your code organized into folders based on phase, unit, and week.  The website you are creating, however, we will be using throughout Phase 0.

3. Clone your repository<br /><br />`git clone [SSH URL]`<br /><br />For your Github Pages website, it would be:<br /><br />`git clone git@github.com:[USERNAME]/[USERNAME].github.io.git`

