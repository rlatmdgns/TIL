# Mac M1  git set

****🍺 Homebrew****

**Mac에서 많은 도구 / 프로그램을 설치할 때 굉장히 많이 사용되는 패키지 관리 프로그램이다.**

****📜 homebrew_m1.sh 파일 내용**

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

****🛠️ 프로그램 설치 / 삭제****

칩셋이 다른 M1 macbook 같은 경우 Cannot install under Rosetta 2 in ARM default prefix (/opt/homebrew) 라는 에러가 발생할 수 있다.
이때는 brew 앞에 arch -arm64 를 같이 작성하여 설치를 시도한다.

```bash
# 설치
brew install [packege or program]

# Rosetta2 관련 에러 발생 시
arch -arm64 brew install [packege or program]

# 삭제
brew uninstall [packege or program]
```