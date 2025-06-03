# Shell kya hota hai?

- *Jab aap Terminal kholte ho (Mac ya Linux mein), toh aap kisi shell ke through computer se baat kar rahe hote ho.*

- *Mac mein default shell hoti hai zsh (Z shell).*

- *Ye ek program hota hai jo aapke commands (jaise git status) ko samajh kar system tak pahuchata hai.*

⸻

# Shell Configuration kya hoti hai?
- *Ye ek setup file hoti hai jo batati hai: jab terminal khule, toh kaunse rules, shortcuts (aliases), aur environment variables automatically set ho jayein.*
- *Mac mein agar aap zsh use kar rahe ho, toh config file hoti hai:*

```
nano ~/.zshrc
```

- *Isme aap likh sakte ho:*

	*Apne shortcuts (aliases),
	Apne custom paths,
	Prompt customization,
	Git autocompletion setup*

## Alias kya hota hai? (Shortcut commands)

Alias = Nickname for a long command

Example:
``` 
alias gs = 'git status' 
alias ga = git add .
alias gp = git push
alias gco = git checkout
alias .. = cd..
```

