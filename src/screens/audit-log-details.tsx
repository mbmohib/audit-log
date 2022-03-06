import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import userImage from '../assets/images/user-photo.png';
import {
  Box,
  Container,
  Image,
  Paper,
  PreLoader,
  Typography,
} from '../components';
import { useGetAuditLog } from '../services/audit-log.api';

const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  margin-top: 40px;
  gap: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  padding-bottom: 8px;

  :last-child {
    border-bottom: 0;
  }
`;

export default function AuditLogDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetAuditLog(id);
  const changes = data?.changes || {};
  const changeKeys = Object.keys(changes);

  return (
    <Container>
      <Paper px={8}>
        <PreLoader isLoading={isLoading}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="header1">{data?.name}</Typography>
              <Typography mt={1}>
                Created At:{' '}
                {data?.createdAt &&
                  format(
                    new Date(data?.createdAt as Date),
                    'dd-MM-yyyy hh:mm a',
                  )}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Image src={userImage} mr={1} />
              <Typography>{data?.createdBy}</Typography>
            </Box>
          </Box>

          <Box mt={6}>
            <Typography variant="header3">
              Event Name: {data?.eventName}
            </Typography>
          </Box>

          <FieldWrapper>
            <Typography fontWeight={600}>Field</Typography>
            <Typography fontWeight={600}>Old Values</Typography>
            <Typography></Typography>
            <Typography fontWeight={600}>New Values</Typography>
          </FieldWrapper>

          {changeKeys.length &&
            changeKeys.map(key => (
              <FieldWrapper>
                <Typography>{key}</Typography>
                <Typography color="gray100">{changes[key].old}</Typography>
                <Typography>{'->'}</Typography>
                <Typography color="primary">{changes[key].new}</Typography>
              </FieldWrapper>
            ))}
        </PreLoader>
      </Paper>
    </Container>
  );
}
