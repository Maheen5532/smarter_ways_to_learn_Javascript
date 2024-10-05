        // Question# 01
        // only declared - space reservedd in ram
        var age = 12, birth_year = 18, number = 14
        
        



        // Question# 02
// ========Legal======
        // (camel case)
        var firstName;
        //  (pascal case)
        var FullName;
        var Full$Name;
        var  full_name;
        var  $full_name;
// ---------------------------------------
// ===========illegal============
//        var 2lastname    number are not allowed as a first letter of variable
        //   var last name   space b/t variable name is not allowed
        // var div    reserved characters are not allowed
        // var last*name special charater are not allowed
        //  var @lastName symbols are not allowed
           

        // question# 03
        // a- Rules for naming .....

         // Create a heading element
         const heading = document.createElement('h1');
         heading.textContent = 'Rules for Naming JS Variables';
         document.body.appendChild(heading);

        // b-Rule 1
        var variable_rules =
        "variable names only contain __ , $ and number fFor example $my_1stVariable" + "</br>" + "</br>"
        document.write(variable_rules);

        // c- Rule 2
        var variable_Case = "Variable Case Names are Camel Case's Further divide into * Upper Case(Pascal) and *lower Case "+"</br>"+"</br>"
        document.write(variable_Case);

        // d- Rule 3 
        var variable_not_allowed = "Variable names should not include special characters and Numbers except for underscores (_) and dollar signs " + "</br>"+
        "JavaScript has reserved keywords that cannot be used as variable names"
        document.write(variable_not_allowed);