<?php 
    class Avenger{
        private string $name = "unknown";
        private string $hero_name = "unknown"; 
        private string $gender = "unknown"; 
        private int $age = 0; 
        private array $super_skills = array();
        public function __construct(string $name, string $hero_name, string $gender, int $age, array $super_skills){
            $this->name = $name;
            $this->hero_name = $hero_name;
            $this->gender = $gender;
            $this->age = $age;
            $this->super_skills = $super_skills;
        }

        public function __toString(){
            return "name: ".$this->name."\ngender: ".$this->gender."\nage: ".$this->age."\n";
        }

        public function __invoke()
        {
            $character = strtoupper($this->hero_name);
            foreach($this->super_skills as $skill){
                $character .= "\n$skill";
            }
            echo $character."\n";
        }
    }

    $first_avenger= new Avenger("Tony Stark", "Iron Man", "man", 38,["intelligence", "durability", "magnetism"]);
    $second_avenger= new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,["agility", "martial arts"]);
    echo "*** calling\$first_avenger() ***\n";
    $first_avenger();
    echo "*** calling echo \$first_avenger ***\n";
    echo $first_avenger;
    echo "*** calling echo \$second_avenger ***\n";
    echo $second_avenger;
    echo "*** calling\$second_avenger() ***\n";
    $second_avenger();
