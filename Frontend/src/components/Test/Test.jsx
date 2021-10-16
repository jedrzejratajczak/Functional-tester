import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TestCase from '../TestCase/TestCase';
import TestProcedure from '../TestProcedure/TestProcedure';
import { getTestById, setTestId } from '../../redux/reducers/test/testSlice';

const Test = ({ isEditable }) => {
  const {
    control: mainControl,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const testId = useSelector((state) => state.test.testId);
  const testName = useSelector((state) => state.test.testName);
  const testCategories = useSelector((state) => state.test.testCategories);
  const testCasesIds = useSelector((state) => state.test.testCasesIds);
  const testProceduresIds = useSelector((state) => state.test.testProceduresIds);
  const selectedTestCase = useSelector((state) => state.test.selectedTestCase);
  const selectedTestProcedure = useSelector((state) => state.test.selectedTestProcedure);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    dispatch(setTestId('test-0')); // TODO: DELETE this line, delete export
    async function getTestData(testId) {
      await dispatch(getTestById(testId));
    }

    getTestData(testId);
  }, []);

  return (
    <Box>
      <Typography variant="h2">Test:</Typography>
      {isEditable && !isEditing && (
        <Button
          sx={{
            position: 'absolute',
            top: '3rem',
            right: '3rem'
          }}
          variant="outlined"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      )}
      <Controller
        shouldUnregister
        name="testName"
        control={mainControl}
        render={({ field }) => (
          <TextField
            id="testName"
            label="Test Name"
            type="text"
            {...field}
            sx={{
              marginTop: '0.625rem',
              width: '15rem'
            }}
          />
        )}
      />
      <Box sx={{ marginTop: '1rem' }}>
        <Controller
          name="categorySelect"
          control={mainControl}
          render={({ field }) => (
            <Box>
              <InputLabel id="categorySelect">Test Category:</InputLabel>
              <Select
                labelId="categorySelect-label"
                id="categorySelect"
                sx={{ width: '10rem' }}
                {...field}
              >
                {testCategories.map((testCategory) => (
                  <MenuItem value={testCategory}>{testCategory}</MenuItem>
                ))}
              </Select>
            </Box>
          )}
        />
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Controller
          name="caseSelect"
          control={mainControl}
          render={({ field }) => (
            <Box>
              <InputLabel id="caseSelect-label">Test Case:</InputLabel>
              <Select labelId="caseSelect-label" id="caseSelect" sx={{ width: '10rem' }} {...field}>
                {testCasesIds.map((testCase) => (
                  <MenuItem value={testCase}>{testCase}</MenuItem>
                ))}
              </Select>
            </Box>
          )}
        />
        {selectedTestCase && (
          <TestCase
            testName="Test-demo"
            testPlanName={selectedTestProcedure}
            testCaseName="Test-Case-1"
            isEditable={isEditing}
          />
        )}
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Controller
          name="procedureSelect"
          control={mainControl}
          render={({ field }) => (
            <Box>
              <InputLabel id="procedureSelect-label">Test Procedure</InputLabel>
              <Select
                labelId="procedureSelect-label"
                id="procedureSelect"
                sx={{ width: '10rem' }}
                {...field}
              >
                {testProceduresIds.map((testProcedure) => (
                  <MenuItem value={testProcedure}>{testProcedure}</MenuItem>
                ))}
              </Select>
            </Box>
          )}
        />
        {selectedTestProcedure && <TestProcedure isEditable={isEditing} />}
      </Box>
      {isEditing && (
        <Button
          variant="outlined"
          sx={{ marginTop: '1.5rem' }}
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save Test
        </Button>
      )}
    </Box>
  );
};

Test.propTypes = {
  isEditable: PropTypes.bool.isRequired
};

export default Test;