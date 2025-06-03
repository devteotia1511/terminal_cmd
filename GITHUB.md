# --- GIT & GITHUB ---


## Git bash set username and useremail command

```
git config --global user.name xyz
git config --global user.email xyx@gmail.com
```

### To open the vs code from gitbash

```
code .
```

### To initialize a repository and to see the hidden folders

```
git init

ls -lart (# hidden files extension)
```

## Git bash commands
```
step 1: #Open folder and then open git bash terminal

step 2: 'git init'

step 3: 'git add filename' or to add all the files at a time then use 'git add -A'

step 4: 'git commit'

step 5: #flashes a new window 
        write 'I' and type message over here 'Kuch bhi'
        press Esc and then type ':wq'

step 6: 'git status'
```
```
-- After Step 3 You can also do --

step 4: git commit -m'< message >'
```

### Git bash command to create new file in Vs-code
```
touch index.html
touch index2.html
touch style.css
touch script.js
touch something.java
```

### If anyone modify your code but now you want to recover it , if till now it is not commit.
```
git checkout <filename>

git checkout -f      # for all the files
```

### To check the git commit status 
```
'git log'

'git log -p -5'  { This command is to check the status of last n(1,2,3,4,5,6...) commits}
```

- *There is a command named as ``` git diff ``` which is used to compare the working tree with staging area.*

- *If  we want to  compare  our staging area with the last commit then we have to  use ``` git diff --staged ```*

- *The command for skip stagging area and commit the rest, then ``` git commit -a -m' message ' ```*

- *``` ls ``` is the command to check all the commit files in the repository.*

- *``` git rm <filename> ``` is the command which is used to delete the file from hard disk as well as stagging area.*

-  *``` git rm --cached <filename> ``` is the command which is used to remove the file from stagging area.*

- *``` .gitignore ``` is the name of a file which collects all ignoring files in it. i.e If these Ignoring files are put in ```.gitignore``` file then it cannot be committed*

- *For Making New branch The command is ``` git branch <branchname>```
and the command to switch on the new branch is ``` git checkout <branchname> ```
and if we do both the process simultaneously , Branch creation and Switch then the command is ``` git checkout -b <branchname> ```*

# Push commands

```
git init
git status
git add -A
git commit -m 'message'
git branch -M main
git remote add origin https://github.com/devteotia1511/practise-repository.git
git push -u origin main


# After First commit

git status
git add .
git commit -m "Your descriptive commit message"
git pull origin <branch-name>   # Optional, but recommended
git push origin <branch-name>
```

## Terminal alias

```
alias gs='git status'
alias ga='git add .'
alias gpm='git push -u origin main'
alias back='cd ..'
alias nzsh='nano ~/.zshrc'
alias szsh='source ~/.zshrc'
```

