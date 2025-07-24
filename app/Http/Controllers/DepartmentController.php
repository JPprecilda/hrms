<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Inertia\Response;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        //
        //$departments = Department::oldest()->paginate(10);
        $search =$request->input('search');
        $departments = Department::query()
                ->when($search, function ($query, $search) {
                    $query->where('department_name', 'like', "%{$search}%")
                        ->orWhere('department_head', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString(); // Keeps the search query in pagination links

        return Inertia::render('Departments/index', ['departments' => $departments]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'department_name' => 'required|string|max:255',
            'department_head' => 'required|string',


        ]);
        Department::create($validated);

        return redirect()->route('departments.index');
    }

    public function create()
    {
        //
        return Inertia::render('Departments/create');
    }

    /**
     * Store a newly created resource in storage.
     */

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        //
        $department->delete();

        return redirect()->back()->with('success', 'Department deleted successfully!');
    }
}
