import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowIcon, CalenderIcon } from '../assets/icons';
import userImage from '../assets/images/user-photo-2.png';
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
              <Box display="flex" alignItems="center" mt={1}>
                <CalenderIcon />
                <Typography ml={1}>
                  {data?.createdAt &&
                    format(
                      new Date(data?.createdAt as Date),
                      'dd-MM-yyyy hh:mm a',
                    )}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Image width={40} src={userImage} mr={1} />
              <Box>
                <Typography variant="subtitle2" color="gray500">
                  Created by:
                </Typography>
                <Typography>{data?.createdBy}</Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={6} display="flex">
            <Typography variant="header3" mr={2} fontWeight={500}>
              Event name:
            </Typography>
            <Typography variant="header3">{data?.eventName}</Typography>
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
                <Typography style={{ textTransform: 'capitalize' }}>
                  {key}
                </Typography>
                <Typography color="gray500">{changes[key].old}</Typography>
                <Typography>
                  <ArrowIcon />
                </Typography>
                <Typography color="primary" fontWeight={500}>
                  {changes[key].new}
                </Typography>
              </FieldWrapper>
            ))}
        </PreLoader>
      </Paper>
    </Container>
  );
}
