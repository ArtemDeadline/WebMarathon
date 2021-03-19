export default function Calculator(){
    this.result = 0;
    this.init = function(init_value){
        this.result = init_value;
        return this;
    };
    this.add = function(add_value){
        this.result += add_value;
        return this;
    };
    this.mul = function(mul_value){
        this.result *= mul_value;
        return this;
    };
    this.div = function(div_value){
        this.result /= div_value;
        return this;
    };
    this.sub = function(sub_value){
        this.result -= sub_value;
        return this;
    };
    this.alert = function(){ setTimeout(()=>alert(this.result), 5000);};
}
