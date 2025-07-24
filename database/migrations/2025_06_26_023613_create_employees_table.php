<?php

use App\Models\Department;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            // $table->string('name');
            // $table->string('education_attainment');
            // $table->string('eligibility');
            // $table->string('email');
            // $table->string('phone');
            // $table->string('address');
            // $table->string('classification');
            // $table->string('plantilla');
            // $table->string('job_description');
            // $table->string('date_hired');
            // $table->string('salary_grade');
            // $table->integer('years_in_service')->default(0);
            // $table->string('employment_status');
            // $table->string('remarks');
            // $table->string('picture')->nullable();

            // NEW

            $table->string('name')->nullable();
            $table->string('sex')->nullable();
            $table->string('civil_status')->nullable();
            $table->string('birthday')->nullable();
            $table->string('place_of_birth')->nullable();
            $table->string('citizenship')->nullable();
            $table->string('address')->nullable();
            $table->string('height')->nullable();
            $table->string('weight')->nullable();
            $table->string('facebook_account')->nullable();
            $table->string('email')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('educational_attainment')->nullable();
            $table->string('course')->nullable();
            $table->string('employment_type')->nullable();
            $table->string('gsis_number')->nullable();
            $table->string('pagibig_number')->nullable();
            $table->string('philhealth_number')->nullable();
            $table->string('sss_number')->nullable();
            $table->string('tin_number')->nullable();
            $table->string('employment_number')->nullable();
            $table->string('plantilla_position')->nullable();
            $table->string('salarygrade')->nullable();
            $table->integer('lengthofservice')->default(0);
            $table->string('regularization_date')->nullable();
            $table->string('date_hired')->nullable();
            $table->string('career_service_eligibility')->nullable();
            $table->string('career_service_date_granted')->nullable();
            $table->string('type_board_exam')->nullable();
            $table->string('ncII_type')->nullable();
            $table->string('picture')->nullable();
            $table->string('remarks')->nullable();


            $table->foreignIdFor(Department::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
