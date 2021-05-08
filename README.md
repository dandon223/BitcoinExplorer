# PIK

Projekt na przedmiot PIK z Politechniki Warszawskiej

# Instrukcje do zbudowania blockchain explorer-a ‘Peek’


## Komponenty:

1. Java w wersji 11

2. Maven

3. Docker

4. Nexus OSS służące jako repozytorium artefaktów

5. Jenkins zapewniający CI/CD


## Instalacja „od zera”

Instalacja obecnie jest jedynie na serwery z systemem operacyjnym linux w dystrybucji ubuntu

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Instalacja komponentów

W pierwszej kolejności należy zainstalować javę oraz komponenty niezbędne do działania projektu.Przed wykonaniem wszelkich instalacji zalecana jest aktualizacja systemu do najnowszej wersji używając sudo apt-get update.Javę najprościej zainstalować poleceniem terminalowym 

**sudo apt-get install openjdk-11-jdk.**

Poprawność instalacji łatwo sprawdzić poleceniem

**java -version.**


Podobnie Maven łatwo zainstalować komendą

**sudo apt install maven.**


Repozytorium Nexus OSS w naszym projekcie jest uruchamiane z kontenera docker. Instalacja dockera jest dokładnie opisana w dokumentacji docker’a https://docs.docker.com/engine/install/ubuntu/ - należy podążając za instrukcjami w niej zawartymi zainicjować repozytorium oraz zainstalować docker engine.

Następnie zgodnie z instrukcjami ze strony https://blog.sonatype.com/sonatype-nexus-installation-using-docker należy ściągnąć kontener z nexusem komendą 

**docker pull sonatype/nexus**

oraz zbudować komendą 

**docker build –rm –tag sonatype/nexus oss/**

Kontener należy uruchomić komendą 

**docker run -d -p 6969:8081 –name nexus sonatype/nexus:oss**

którą przypisujemy portowi 8081 na którym słucha nexus w dockerze port 6969 maszyny host’a, umożliwiając komunikację między nimi.

Ostatnim z niezbędnych narzędzi jest Jenkins, którego zgodnie z jego instrukcją instalacji https://www.jenkins.io/doc/book/installing/linux/ można dokonać wywołując szereg komend:


**wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -**

**sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary >**

**/etc/apt/sources.list.d/jenkins.list'**

**sudo apt-get update**

**sudo apt-get install Jenkins**

# Uruchomienie aplikacji

Tak ustawione środowisko pozwala na uruchomienie aplikacji. Zakładając posiadanie pliku .war pobranego np. Z poprzedniego repozytorium artefaktów, można go po prostu uruchomić. W przeciwnym razie wystarczy uruchomić odpowiedniu skonfigurowa
