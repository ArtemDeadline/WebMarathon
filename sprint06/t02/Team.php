<?php 
    class Avenger{
        private string $name = "unknown";
        private string $hero_name = "unknown"; 
        private string $gender = "unknown"; 
        private int $age = 0; 
        private array $super_skills = array();
        public int $hp = 0;
        public function __construct(string $name, string $hero_name, string $gender, int $age, array $super_skills, $hp){
            $this->name = $name;
            $this->hero_name = $hero_name;
            $this->gender = $gender;
            $this->age = $age;
            $this->super_skills = $super_skills;
            $this->hp = $hp;
        }

        public function __toString(){
            return "name: ".$this->name."\ngender: ".$this->gender."\nage: ".$this->age."\nhp: ".$this->hp."\n";
        }

        public function __invoke()
        {
            $character = strtoupper($this->hero_name);
            $character .= "\nhp: $this->hp";
            foreach($this->super_skills as $skill){
                $character .= "\n$skill";
            }
            echo $character."\n";
        }

    }

    class Team{
        private int $id;
        private array $team;

        public function __construct(int $id, array $team){
            $this->id = $id;
            $this->team = $team;
        }

        public function battle($damage){
            foreach($this->team as $i =>$hero){
                $hero->hp -= $damage;
                if($hero->hp <= 0)
                    unset($this->team[$i]);
            }
        }

        public function calculate_losses($cloned_team){
            $lives = 0;
            foreach($cloned_team->team as $hero_before){
                foreach($this->team as $hero_after){
                    if($hero_before == $hero_after){
                        $lives++;
                        break;
                    }
                }
            }
            $losses = count($cloned_team->team) - $lives;
            if($losses == 0)
                echo "We haven't lost anyone in this battle!\n";
            else
                echo "In this battle we lost $losses Avenger(s).";
        }

        /*public function __clone(){
            $new_team = array();
            foreach($this->team as $i => $hero){
                $new_team[$i] = $hero;
            }
            unset($this->team);
            $this->team = $new_team;
        }*/
    }

    $arr= array();
    $arr[0] = new Avenger("Tony Stark", "Iron Man", "man", 38,["intelligence", "durability", "magnetism"], 120);
    $arr[1] = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,["agility", "martial arts"], 75);
    $arr[2] = new Avenger("Carol Danvers", "Captain Marvel", "woman", 27,["durability", "flight", "interstellar travel"], 95);
    $team= new Team(1, $arr);

    echo "Battle 1\n";
    $cloned_team = clone $team;
    $damage = 25;
    $team->battle($damage);
    $team->calculate_losses($cloned_team);
    
    echo"\nBattle 2\n";
    $cloned_team = clone $team;
    $damage = 80; 
    $team->battle($damage);
    $team->calculate_losses($cloned_team);
