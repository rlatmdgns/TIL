# Mac M1  git set

****πΊ Homebrew****

**Macμμ λ§μ λκ΅¬ / νλ‘κ·Έλ¨μ μ€μΉν  λ κ΅μ₯ν λ§μ΄ μ¬μ©λλ ν¨ν€μ§ κ΄λ¦¬ νλ‘κ·Έλ¨μ΄λ€.**

****π homebrew_m1.sh νμΌ λ΄μ©**

```bash
# We'll be installing Homebrew in the /opt directory.
cd /opt

# Create a directory for Homebrew. This requires root permissions.
sudo mkdir homebrew

# Make us the owner of the directory so that we no longer require root permissions.
sudo chown -R $(whoami) /opt/homebrew

# Download and unzip Homebrew. This command can be found at https://docs.brew.sh/Installation.
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew

# Add the Homebrew bin directory to the PATH. If you don't use zsh, you'll need to do this yourself.
echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc
```

****π οΈ νλ‘κ·Έλ¨ μ€μΉ / μ­μ ****

μΉ©μμ΄ λ€λ₯Έ M1 macbook κ°μ κ²½μ° Cannot install under Rosetta 2 in ARM default prefix (/opt/homebrew) λΌλ μλ¬κ° λ°μν  μ μλ€.
μ΄λλ brew μμ arch -arm64 λ₯Ό κ°μ΄ μμ±νμ¬ μ€μΉλ₯Ό μλνλ€.

```bash
# μ€μΉ
brew install [packege or program]

# Rosetta2 κ΄λ ¨ μλ¬ λ°μ μ
arch -arm64 brew install [packege or program]

# μ­μ 
brew uninstall [packege or program]
```