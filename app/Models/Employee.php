<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    protected $fillable = [

        'name',
        'sex',
        'civil_status',
        'birthday',
        'place_of_birth',
        'citizenship',
        'address',
        'height',
        'weight',
        'facebook_account',
        'email',
        'contact_number',
        'educational_attainment',
        'course',
        'employment_type',
        'gsis_number',
        'pagibig_number',
        'philhealth_number',
        'sss_number',
        'tin_number',
        'employment_number',
        'plantilla_position',
        'salarygrade',
        'lengthofservice',
        'regularization_date',
        'date_hired',
        'career_service_eligibility',
        'career_service_date_granted',
        'type_board_exam',
        'ncII_type',
        'picture',
        'department_id',
        'remarks',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
