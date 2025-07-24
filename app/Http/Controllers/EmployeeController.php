<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //working
        $query = Employee::with('department')->select('employees.*');
        $search = $request->input('search');

        // if($request->has('search')){
        //     $search = $request->input('search');
        //     $query->where('name', 'like', "%{$search}%")
        //         ->orWhere('education_attainment', 'like', "%{$search}%")
        //         ->orWhere('eligibility', 'like', "%{$search}%")
        //         ->orWhere('email', 'like', "%{$search}%")
        //         ->orWhere('address', 'like', "%{$search}%")
        //         ->orWhere('department_id', 'like', "%{$search}%")
        //         ->orWhere('classification', 'like', "%{$search}%")
        //         ->orWhere('plantilla', 'like', "%{$search}%")
        //         ->orWhere('job_description', 'like', "%{$search}%")
        //         ->orWhere('date_hired', 'like', "%{$search}%")
        //         ->orWhere('salary_grade', 'like', "%{$search}%")
        //         ->orWhere('years_in_service', 'like', "%{$search}%")
        //         ->orWhere('employment_status', 'like', "%{$search}%")
        //         ->orWhere('remarks', 'like', "%{$search}%");
        // }


        // $employees = $query->oldest()->paginate($perPage);

        ////////////////////////////////////////////////////////////// END
        $perPage = request('perPage', 10);
        $employees = Employee::query()
            ->with('department')
            ->leftJoin('departments', 'employees.department_id', '=', 'departments.id')
            ->where(function ($query) use ($search) {
                $query->where('employees.name', 'like', "%{$search}%")
                    ->orWhere('sex', 'like', "%{$search}%")
                    ->orWhere('civil_status', 'like', "%{$search}%")
                    ->orWhere('place_of_birth', 'like', "%{$search}%")
                    ->orWhere('citizenship', 'like', "%{$search}%")
                    ->orWhere('address', 'like', "%{$search}%")
                    ->orWhere('height', 'like', "%{$search}%")
                    ->orWhere('weight', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('educational_attainment', 'like', "%{$search}%")
                    ->orWhere('plantilla_position', 'like', "%{$search}%")
                    ->orWhere('employment_type', 'like', "%{$search}%")
                    ->orWhere('employment_number', 'like', "%{$search}%")
                    ->orWhere('departments.department_name', 'like', "%{$search}%");
            })
            ->select('employees.*') // important to avoid column name collision
            ->paginate($perPage);


        $departments = Department::select('id', 'department_name')->get();

        return Inertia::render('Employees/index', [
            'employees' => $employees,
            'filters' => [
                'search' => $search,
            ],
            'departments' => $departments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Employees/create', [
            'departments' => Department::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // $table->string('name');
        //     $table->string('email')->unique();
        //     $table->string('position');
        $validated = $request->validate([

            'name' => 'nullable|string|max:255',
            'department_id' => 'nullable|',
            'sex'  => 'nullable|string|max:255',
            'civil_status'  => 'nullable|string|max:255',
            'birthday'  => 'nullable|string|max:255',
            'place_of_birth'  => 'nullable|string|max:255',
            'citizenship'  => 'nullable|string|max:255',
            'address'  => 'nullable|string|max:255',
            'height'  => 'nullable|string|max:255',
            'weight'  => 'nullable|string|max:255',
            'facebook_account'  => 'nullable|string|max:255',
            'email'  => 'nullable|string|max:255',
            'contact_number'  => 'nullable|string|max:255',
            'educational_attainment'  => 'nullable|string|max:255',
            'course'  => 'nullable|string|max:255',
            'employment_type'  => 'nullable|string|max:255',
            'gsis_number'  => 'nullable|string|max:255',
            'pagibig_number'  => 'nullable|string|max:255',
            'philhealth_number'  => 'nullable|string|max:255',
            'sss_number'  => 'nullable|string|max:255',
            'tin_number'  => 'nullable|string|max:255',
            'employment_number'  => 'nullable|string|max:255',
            'plantilla_position'  => 'nullable|string|max:255',
            'salarygrade'  => 'nullable|string|max:255',
            'lengthofservice'  => 'nullable|integer',
            'regularization_date'  => 'nullable|string|max:255',
            'date_hired'  => 'nullable|string|max:255',
            'career_service_eligibility'  => 'nullable|string|max:255',
            'career_service_date_granted'  => 'nullable|string|max:255',
            'type_board_exam'  => 'nullable|string|max:255',
            'ncII_type'  => 'nullable|string|max:255',
            'picture' => 'nullable|image|mimes:jpeg,png,jpg,gif',
            'remarks'=> 'nullable|string|max:255',

            //'years_in_service' => 'nullable|integer',
            //'picture' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($request->hasFile('picture')) {
            $path = $request->file('picture')->store('employees', 'public');
            $validated["picture"] = "storage/" . $path;
        }

        // 'picture',

        Employee::create($validated);

        return redirect()->route('employees.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
        $employee->load('department');

        return Inertia::render('Employees/show', [
            'employee' => $employee,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
        return Inertia::render('Employees/edit', [
            'employee' => $employee
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
        $request->validate([
            'remarks' => 'nullable|string|max:1000',
        ]);

        $employee->update($request->all());

        return back()->with('success', 'Remarks updated succesfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
        $employee->delete();

        return redirect()->route('employees.index');
    }
}
